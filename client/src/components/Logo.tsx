import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href={"https://wolefabikun.com/"}>
      <Image
        src="/lubot.png"
        alt="Wole Fabikun"
        width={30}
        height={45}
      />
    </Link>
  )
}

export default Logo