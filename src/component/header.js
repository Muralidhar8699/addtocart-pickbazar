export default function Header(){
    return(
        <div className="header-main-container">
            <div className="header-img-div">
                <img className="header-img" src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=3840&q=75"/>
            </div>
            <div>
                <span>Grocery</span>
            </div>
            <div>
                <span>Find Location:</span>
                <span>Enter your adress</span>
            </div>
            <div>
                <input/>
            </div>
            <div>
                <span>Shops</span>
                <span>Offers</span>
                <span>FAQ</span>
                <span>Contact</span>
            </div>
            <div>
                <button>Become a Seller</button>
                <button>oin</button>
            </div>
            <div>
                <span>Login</span>
            </div>

        </div>
    )
}