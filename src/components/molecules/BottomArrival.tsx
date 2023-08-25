

const BottomArrival = () => {
  return (
    <div className='grid grid-cols-[repeat(12,1fr)] bg-black gap-[10px] grid-rows-[repeat(12,1fr)] text-white'>
      <div className='bg-white col-[1_/_7] row-[1_/_-1]'>First</div>
      <div className='col-[7_/_-1] row-[1_/_7] bg-orange-600'>second</div>

      <div>Third</div>

      <div>Fourth</div>
    </div>
  );
}

export default BottomArrival

