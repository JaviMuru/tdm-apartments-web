export const NotFound = () => {
  return (
    <section className="comming section-padding">
      <div className="v-middle">
        <div className="container">
          <div className="row text-center mb-30">
            <div className="col-md-12">
              <h2>Not Found 404</h2>
              <h6>Sorry We Can't Find That Page!</h6>
            </div>
          </div>
          <div className="row mb-30">
            <div className="col-md-12 text-center">
              <h1>404</h1>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6 offset-md-3 text-center">
              <p>The page you are looking for was moved, removed, renamed or never existed.</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="go-back col-md-12">
              <a href="/">
                {' '}
                <span>
                  <i className="ti-arrow-left" aria-hidden="true"></i>
                </span>
                &nbsp; Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
