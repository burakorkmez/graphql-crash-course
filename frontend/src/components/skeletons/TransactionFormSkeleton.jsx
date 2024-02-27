const TransactionFormSkeleton = () => {
	return (
		<div className='h-screen max-w-xl mx-auto py-10'>
			<h3 className='h-6 bg-gray-200 rounded animate-pulse'></h3>

			<ul className='mt-5 flex gap-3'>
				<li className='w-full h-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse'></li>
				<li className='w-full h-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse'></li>
				<li className='w-full h-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse'></li>
			</ul>
			<ul className='mt-5 flex gap-3'>
				<li className='w-full h-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse'></li>
				<li className='w-full h-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse'></li>
			</ul>
			<ul className='mt-5 flex gap-3'>
				<li className='w-full h-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse'></li>
			</ul>
		</div>
	);
};
export default TransactionFormSkeleton;
