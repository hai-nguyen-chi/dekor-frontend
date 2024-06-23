interface propsItem {
  width: string
  height: string
}

const CoreItem = (props: propsItem) => {
  const { width, height } = props
  return (
    <div>
      <img src="/vite.svg" alt="" width={width} height={height} />
      <div className="text-center mt-5 pb-6.25">
        <div>Sopha cafe</div>
        <div>2.300.000₫</div>
      </div>
    </div>
  )
}

export default CoreItem
