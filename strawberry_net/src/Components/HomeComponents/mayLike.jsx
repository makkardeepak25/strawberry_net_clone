import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import styles from "./mayLike.module.css";
import { getProdData } from "../../Redux/Products/productAction";
import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export const MayLike = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.prod.products);

  React.useEffect(
    () => {
      dispatch(getProdData());
    },
    [dispatch]
  );
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2
    },

    mid: {
      breakpoint: { max: 800, min: 600 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Carousel responsive={responsive} infinite={true} swipeable={true} draggable={true} showDots={true}>
        {data.map(el => {
          return (
            <div className={styles.prodDiv}>
              <Link to={`/products/${el.id}`}>
                {" "}
                <>
                  <a>
                    <span className={styles.prodname}>{el.prod_name}</span>
                    <p className={styles.desc}>
                      {el.prod_description}
                      <span> {el.size[0].size}</span>
                    </p>
                  </a>
                  {el.offer ? <div className={styles.offers}>Save {el.offer}%</div> : null}
                  <img className={styles.imgProd} src={el.images[0]} />
                  <div className={styles.prodprice}>Rs&nbsp;{el.size[0].price}</div>
                </>
              </Link>
            </div>
          );
        })}
      </Carousel>
      ;
    </>
  );
};
