import {useRouter} from 'next/router';


function SelectedClientProjectPage() {

	const router = useRouter();
	console.log(router.query)
	return (
		<div>
			The Project Page for a specific project for a selected client { router.query['clientprojectid'] }xxx
		</div>
	);
}

export default SelectedClientProjectPage;