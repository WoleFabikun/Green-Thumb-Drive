from flask import Flask, request, jsonify
from flask_cors import CORS
from videodb import connect, play_stream, SearchType
from llama_index.retrievers.videodb import VideoDBRetriever
from llama_index.core import get_response_synthesizer
from llama_index.core.query_engine import RetrieverQueryEngine
from videodb.timeline import Timeline
import os 

app = Flask(__name__)
CORS(app)

#get api key from .env file
videodb_api_key = os.getenv('VIDEODB_API_KEY')

conn = connect(api_key=videodb_api_key)

# after uploading a video through videodb website, index the spoken words
# coll = conn.get_collection()

# for video in coll.get_videos():
#     try:
#         video.index_spoken_words()
#     except Exception as e
#         print(e)

retriever = VideoDBRetriever(api_key=videodb_api_key)

# use your llama_index response_synthesizer on search results. 
response_synthesizer = get_response_synthesizer()

query_engine = RetrieverQueryEngine(
    retriever=retriever,
    response_synthesizer=response_synthesizer,
)


# takes a query and returns video from the strongest node of the search result
@app.route('/search_video', methods=['POST'])
def search_video():
    coll = conn.get_collection()
    query = request.json['query']
    retrieved_nodes = retriever.retrieve(query)

    video_node = None

    for nodeObj in retrieved_nodes:
        if video_node is None or nodeObj.score > video_node.score:
            video_node = nodeObj
    
    video = coll.get_video(video_node.node.metadata["video_id"])

    start = video_node.node.metadata["start"]
    end = video_node.node.metadata["end"]

    stream_url = video.generate_stream(timeline=[(start, end)])

    return jsonify({'stream_url': str(stream_url)})

@app.route('/search_query', methods=['POST'])
def search_query():
    query = request.json['query']
    response = query_engine.query(query)
    serializable_response = {
        "response": str(response)
    }
    return jsonify(serializable_response)


if __name__ == '__main__':
    app.run(debug=True, port=8080)