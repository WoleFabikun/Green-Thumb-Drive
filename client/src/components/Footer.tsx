

const Footer = () => {
  //made it bottom sticky here
  return <footer className='absolute inset-x-0 bottom-0 bg-secondary py-6'>
    <div className='flex flex-col items-center justify-between'>
      <div className='text-muted-foreground'>
        Copyright &copy; Oluwole Fabikun. All rights reserved
      </div>
    </div>
  </footer>
}

export default Footer