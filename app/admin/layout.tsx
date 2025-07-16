import React from 'react';

interface Props {
	children: React.ReactNode;
}
const layout = ({ children }: Props) => {
	return (
		<div className="flex">
			<aside className="bg-slate-200 p-5 mr-5">Admin Sidebar</aside>
			<div>{children}</div>
		</div>
	);
};

export default layout;
