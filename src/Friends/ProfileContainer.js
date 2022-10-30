const num = 10;
const car = { brand: "Audi", model: "A1", transmission: "auto"}
export default function ProfileContainer() {
    return (
        <div>
            <h1>Profile Info goes here</h1>
            <h1>{car.brand}</h1>
        </div>
    );
}