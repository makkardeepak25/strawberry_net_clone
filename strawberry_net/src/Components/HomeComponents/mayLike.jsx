import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Card.module.css";
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
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 
        }
    };
    return <>
    <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
        {data.map(el => {
        return (
          <div className={styles.prodDiv}>
            <Link to={`/products/${el.id}`}>  <>
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
              <button className={styles.bagbtn}>Add to bag</button>
                <div className={styles.extraoff}>Extra 8% Off on US$80</div>
                </></Link>
              <div className={styles.wishlist}>
                <FavoriteBorderIcon style={{ color: "#662d91" }} />
              </div>
            </div>
        );
      })}
        </Carousel>;
        </>
}