import { useState, useEffect } from 'react'
function AllMeetupPage() {

	const [isLoading, setIsLoading] = useState(true)
	const [loadedMeetups, setLoadedMeetups] = useState([])
	// const [state, setstate] = useState(initialState)
	// use
	useEffect(() => {
		setIsLoading(true)
		
		// return () => {
		// 	cleanup
		// }
	}, [isLoading])

	if(isLoading) {
		return (
			<section className="">
				<span>...Loading</span>
			</section>
		)
	}
	return (
		<div>
			Enterxxxx
		</div>
	);
}

export default AllMeetupPage;