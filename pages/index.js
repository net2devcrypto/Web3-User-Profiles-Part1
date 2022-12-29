import 'sf-font';
import axios from 'axios';


export default function Home() {
  return (
    <div
    style={{ color: "white", fontFamily: "SF Pro Display", fontSmooth: "3em" }}
  >
      <div className='container'>
      <main>
      <div className="py-2 text-center">
          <div className="col-7 p-3 mx-auto">
            <img
              className=" mb-4 mr-4 ml-4"
              src="n2DChat.png"
              alt=""
              width="160"
              height="130"
            />
            <img
              className=" mb-4 mr-4 mt-3 ml-4"
              src="n2Dex-img.png"
              alt=""
              width="200"
              height="90"
            />
            <img
              className="mb-4 mr-4 mt-3 ml-4"
              src="n2dlotto.png"
              alt=""
              width="200"
              height="70"
            />
          </div>
          <div className="col mt-4 mx-auto">
            <h1 className="mb-0">Edit Your</h1>
            <h1 style={{ fontSize: "54px", marginRight: "5px" }}>
              <img
                style={{ marginRight: "4px" }}
                src="web3logo.png"
                width="160"
                height="65"
              />
              Profile
            </h1>
          </div>
        </div>
        <div className="row g-6">
          <div className="col-md-3 col-lg-3">
            <form
              className="card p-1"
              style={{
                backgroundColor: "#00000070",
                boxShadow: "0px 1px 5px #ffffff",
              }}
            >
              <img
                className="d-block mx-auto"
                src="ipfs.png"
                alt=""
                style={{
                  maxWidth: "60px",
                  maxHeight: "60px",
                  position: "absolute",
                  boxShadow: "0px, 1px, 10px, #00000070",
                }}
              />
              <h5
                className="d-flex justify-content-end"
                id="displaypicchanged"
              />
              <img
                className="d-block mx-auto mb-4"
                alt=""
                style={{
                  maxWidth: "250px",
                  maxHeight: "250px",
                  minWidth: "40px",
                  minHeight: "20px",
                }}
              />
              <input
                style={{ backgroundColor: "transparent", color: "lightblue" }}
                className="btn btn-secondary d-flex justify-content-end"
                type="file"
                name="Asset"
                
              />
              Update Profile Avatar
            </form>
            <h4 className="d-flex justify-content-end align-items-right mt-2 mb-3">
              <span className="text-primary bold">Rank</span>
              <span className="badge bg-primary rounded-pill">39</span>
            </h4>
            <ul className="list-group mb-3">
              <li
                className="list-group-item d-flex justify-content-between"
                style={{ backgroundColor: "#2E69FF30" }}
              >
                <div className="text-success">
                  <h4 className="my-0" style={{ color: "white" }}>
                    NFT
                  </h4>
                  <small style={{ color: "white" }}>PASSPORT</small>
                </div>
                <span style={{ fontSize: "30px", color: "white" }}>
                  ID 
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-8">
            <h4 className="mb-3 d-flex justify-content-end">Profile Info</h4>
            <h5
              className="d-flex justify-content-end"
              id="displayupdatechanged"
            />
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="first" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="first"
                    id="first"
                    style={{
                      backgroundColor: "#d3d3d310",
                      fontWeight: "lighter",
                      color: "white",
                    }}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="last" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="last"
                    id="last"
                    style={{
                      backgroundColor: "#d3d3d310",
                      fontWeight: "lighter",
                      color: "white",
                    }}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      name="user"
                      id="user"
                      style={{
                        backgroundColor: "#d3d3d310",
                        fontWeight: "lighter",
                        color: "white",
                      }}
                      required
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="email" className="form-label">
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    style={{
                      backgroundColor: "#d3d3d310",
                      fontWeight: "lighter",
                      color: "white",
                    }}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
              </div>
            </form>
            <h6 id="displaysuccess" />
            <button
              className="w-100 btn btn-primary btn-md mt-4"
              style={{
                backgroundColor: "transparent",
                fontWeight: "lighter",
                fontSize: "20px",
              }}
            >
              Update Profile
            </button>
              </div>
          </div>
          <hr className="my-3" />
            <div className="row d-flex">
              <div className="col-lg-6">
                <h4 className="mb-2">Personal Wallet</h4>
                <h6
                  style={{
                    color: "#83EEFF",
                    fontSize: "13px",
                  }}
                >
                </h6>
                <input
                  type="text"
                  className="form-control col-10"
                  name="newwallet"
                  id="newwallet"
                  placeholder="Paste new wallet id"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "white",
                  }}
                  required
                />
                <button className="btn btn-secondary mt-2">
                  Update Wallet
                </button>
                <p className="lead" style={{ fontSize: "12px" }}>
                  Remember your wallet is tied to your NFT, If you update your
                  wallet, your NFT passport will be moved as well! Both items
                  are required for access. Once your NFT has been moved, please
                  re-login using your new wallet.
                </p>
                <h6 id="walletsuccess" />
              </div>
              <div className="col-lg-4">
                <div className="row mb-1">
                  <div className="col-sm-3">
                    <img width='60' height='60'
                      src='n2dr-icon.png'
                    />
                  </div>
                  <div className='col-md-5'>
                  <h4 className="mb-2">Balance</h4>
                  <h3 className='mt-1'></h3>
                  </div>
                <label>Internal Wallet</label>
                <h6
                  style={{
                    color: "#83EEFF",
                    fontSize: "13px",
                  }}
                >
                </h6>
                <h6 className="mt-2">Transfer N2DR to Personal Wallet</h6>
                <button className="btn btn-primary mt-2">
                  Transfer N2DR
                </button>
                <h6 id="displaytransfer" />
                </div>
              </div>
              </div>
        </main>
      </div>
      </div>
  )
}
