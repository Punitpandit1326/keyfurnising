import React from "react";
import styles from "./help.module.css";
import Header from "../../Components/Header/Header";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Help2 = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Header title="Help" />

      <div className={styles.scrollable_content}>
        <div>
          <input type="text" placeholder="Search Help" />
          <CiSearch className={styles.search_icon} />
        </div>

        <div className={styles.info}>
          <h6>Shipping & Delivery</h6>
          <p>
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
            <br />
            <br />
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
            <br />
            <br />
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam
            bibendum pellentesque quam a convallis. Sed ut vulputate nisi.
            Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu
            sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
            magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices
            nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla
            varius volutpat turpis sed lacinia.
          </p>
          <h5>Was this information is helpful</h5>
          <div className="d-flex gap-2">
            <button>Yes</button>
            <button onClick={() => navigate(`/chatsupport`)}>No</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Help2;
