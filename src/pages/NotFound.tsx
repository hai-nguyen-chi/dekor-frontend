import { Button } from '@headlessui/react'
function NotFound() {
  return (
    <div className="flex justify-center items-center text-center h-screen">
      <div className="text-center px-4">
        <img src="/error-404.jpg" alt="" />
        <div className="text-4xl font-semibold">404 - Page not found</div>
        <div className="text-2xl font-medium max-w-2xl">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </div>
        <Button className="text-center text-white text-2xl rounded-3xl bg-violet-900 font-semibold mt-4 px-8 py-2">
          Back to home
        </Button>
      </div>
    </div>
  )
}

export default NotFound
