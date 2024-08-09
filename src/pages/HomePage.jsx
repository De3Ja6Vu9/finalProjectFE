import HeaderComponent from "../Components/HeaderComponent";


function HomePage() {
    let title = "Home Page";
    return (
        <>
            <HeaderComponent></HeaderComponent>

            <main className="main">
                <h2>{title}</h2>


            </main >
        </>
    );
}

export default HomePage;