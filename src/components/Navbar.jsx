import Button from "./Button";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="navbar flex bg-black p-1 justify-between height-10">
        <Logo />
        <Button fontColor="white" text="Home" />
        <Button fontColor="white" text="About" />
        <Button fontColor="white" text="Contact" />
        <Button fontColor="white" text="Login" />
    </nav>
  );
}
export default Navbar;
