import { sort } from 'fast-sort';
import Link from 'next/link';

interface User {
	id: number;
	name: string;
	email: string;
}

interface Props {
	sortOrder: string;
}
const UserTable = async ({ sortOrder }: Props) => {
	const resposne = await fetch('https://jsonplaceholder.typicode.com/users', {
		cache: 'no-cache',
	});
	const users: User[] = await resposne.json();
	const sortedUsers = sort(users).asc(
		sortOrder === 'email' ? user => user.email : user => user.name
	);
	return (
		<table className="table tabs-border">
			<thead>
				<tr>
					<th>
						<Link href="/users?sortOrder=name">Name</Link>
					</th>
					<th>
						<Link href="/users?sortOrder=email">Email</Link>
					</th>
				</tr>
			</thead>
			<tbody>
				{sortedUsers.map(user => (
					<tr key={user.id}>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default UserTable;
