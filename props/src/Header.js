function Header(props) {
    return(
        <div>
        <h1>Hello from the Header {props.name}</h1>
        <p>Hello from the Header {props.lastname}</p>
        </div>
    );
};

export default Header;