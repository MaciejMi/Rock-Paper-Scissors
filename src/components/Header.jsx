const Header = ({ title, description, children, ...props }) => {
	return (
		<header {...props}>
			<h1>{title}</h1>
			<p>{description}</p>
			{children}
		</header>
	);
};

export default Header;
