import "./NavBar.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Navigation(props) {
  const {
    categories = [],
    setCurrentCategory
  } = props;

  return (
    <nav>
      <ul className="flex-row navBar">
        {categories.map((category) => (
          <li
            className='mx-1 navItem'
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
              }}
            >
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
