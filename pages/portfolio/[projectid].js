import {useRouter} from 'next/router'

function PortfolioProjectPage() {
	const router = useRouter();


	console.log(router.pathname)
	console.log(router.query)
	return (
		<div>
			<h1>Hello</h1>
			<h2></h2>

		</div>
	);
}

export default PortfolioProjectPage;