const ButtonContainer = ({ container = 'menu', children, ...props }) => {
	const Container = container;
	return <Container {...props}>{children}</Container>;
};

export default ButtonContainer;
