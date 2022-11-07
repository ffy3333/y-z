import Footer from '../Footer';
import Newsletter from '../Newsletter';
import Swich from '../Switch/Switch';

const Layout = () => {
  return (
    <>
      <div>
        <Swich />
      </div>
      <div>
        <Newsletter />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
