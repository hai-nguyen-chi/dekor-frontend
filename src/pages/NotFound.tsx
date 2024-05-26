import { Image, Button } from 'antd'
function NotFound() {
  return (
    <div className="flex justify-center items-center text-center h-screen">
      <div className="text-center">
        <Image width={300} src="/error-404.jpg" preview={false} />
        <div className="text-4xl font-semibold">404 - Page not found</div>
        <div className="text-2xl font-medium max-w-2xl">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </div>
        <div className="flex justify-center mt-4">
          <Button
            rootClassName="flex items-center justify-center text-center text-white text-2xl w-52 h-12 rounded-3xl bg-violet-900 font-semibold"
            href={''}
            type="primary"
          >
            Back to home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
