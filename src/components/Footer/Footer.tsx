import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
    <div className={styles.main_footer}>
      <div className="container">
        <div className={styles.line}></div>
        <div className={styles.row}>
          {/* Column1 */}
          <div className="col">
            <h1 className="list-unstyled">
            </h1>
          </div>
          {/* Column2 */}
          <div className={styles.info}>
            <ul className={styles.list}>
            <li><h4>NEFT CAFE</h4></li>
              <li><a href='#'>О нас</a></li>
              <li><a href='#'>Блог</a></li>
              <li><a href='#'>Идеи</a></li>
            </ul>
          {/* Column3 */}
            <ul className={styles.list}>
            <li><h4>Работа</h4></li>
              <li><a href='#'>В кафе</a></li>
            </ul>
            {/* Column4 */}
            <ul className={styles.list}>
            <li><h4>Партнерам</h4></li>
              <li><a href='#'>Франшиза</a></li>
              <li><a href='#'>Инвестиции</a></li>
              <li><a href='#'>Поставщикам</a></li>
            </ul>
            {/* Column5 */}
            <ul className={styles.list1}>
              <li><a href='https://vk.com' target='_blank'><svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" fill="black"/>
                  <path d="M20.9825 27C13.466 27 9.17864 21.7447 9 13H12.7651C12.8888 19.4184 15.6646 22.1371 17.8632 22.6977V13H21.4085V18.5355C23.5796 18.2973 25.8607 15.7748 26.6302 13H30.1755C29.8855 14.4391 29.3075 15.8017 28.4776 17.0025C27.6477 18.2033 26.5837 19.2166 25.3523 19.979C26.7269 20.6756 27.941 21.6615 28.9145 22.8717C29.888 24.082 30.5988 25.489 31 27H27.0974C26.7373 25.6876 26.0054 24.5128 24.9934 23.6228C23.9814 22.7328 22.7343 22.1673 21.4085 21.997V27H20.9825Z" fill="white"/>
              </svg></a>
              </li>
              <li><a href='https://web.telegram.org' target='_blank'><svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" fill="black"/>
                  <path d="M28 12.6022L24.9946 28.2923C24.9946 28.2923 24.5741 29.3801 23.4189 28.8584L16.4846 23.3526L16.4524 23.3364C17.3891 22.4654 24.6524 15.7027 24.9698 15.3961C25.4613 14.9214 25.1562 14.6387 24.5856 14.9974L13.8568 22.053L9.71764 20.6108C9.71764 20.6108 9.06626 20.3708 9.00359 19.8491C8.9401 19.3265 9.73908 19.0439 9.73908 19.0439L26.6131 12.1889C26.6131 12.1889 28 11.5579 28 12.6022Z" fill="white"/>
              </svg></a>
              </li>
              <li><a href='https://www.instagram.com' target='_blank'><svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" fill="black"/>
                  <path d="M20 11.8072C22.6506 11.8072 23.0121 11.8072 24.0964 11.8072C25.0602 11.8072 25.5422 12.0482 25.9036 12.1687C26.3855 12.4096 26.747 12.5301 27.1084 12.8916C27.4699 13.253 27.7108 13.6145 27.8313 14.0964C27.9518 14.4578 28.0723 14.9398 28.1928 15.9036C28.1928 16.988 28.1928 17.2289 28.1928 20C28.1928 22.7711 28.1928 23.0121 28.1928 24.0964C28.1928 25.0602 27.9518 25.5422 27.8313 25.9036C27.5904 26.3855 27.4699 26.747 27.1084 27.1084C26.747 27.4699 26.3855 27.7108 25.9036 27.8313C25.5422 27.9518 25.0602 28.0723 24.0964 28.1928C23.0121 28.1928 22.7711 28.1928 20 28.1928C17.2289 28.1928 16.988 28.1928 15.9036 28.1928C14.9398 28.1928 14.4578 27.9518 14.0964 27.8313C13.6145 27.5904 13.253 27.4699 12.8916 27.1084C12.5301 26.747 12.2892 26.3855 12.1687 25.9036C12.0482 25.5422 11.9277 25.0602 11.8072 24.0964C11.8072 23.0121 11.8072 22.7711 11.8072 20C11.8072 17.2289 11.8072 16.988 11.8072 15.9036C11.8072 14.9398 12.0482 14.4578 12.1687 14.0964C12.4096 13.6145 12.5301 13.253 12.8916 12.8916C13.253 12.5301 13.6145 12.2892 14.0964 12.1687C14.4578 12.0482 14.9398 11.9277 15.9036 11.8072C16.988 11.8072 17.3494 11.8072 20 11.8072ZM20 10C17.2289 10 16.988 10 15.9036 10C14.8193 10 14.0964 10.241 13.494 10.4819C12.8916 10.7229 12.2892 11.0843 11.6867 11.6867C11.0843 12.2892 10.8434 12.7711 10.4819 13.494C10.241 14.0964 10.1205 14.8193 10 15.9036C10 16.988 10 17.3494 10 20C10 22.7711 10 23.0121 10 24.0964C10 25.1807 10.241 25.9036 10.4819 26.506C10.7229 27.1084 11.0843 27.7108 11.6867 28.3133C12.2892 28.9157 12.7711 29.1566 13.494 29.5181C14.0964 29.759 14.8193 29.8795 15.9036 30C16.988 30 17.3494 30 20 30C22.6506 30 23.0121 30 24.0964 30C25.1807 30 25.9036 29.759 26.506 29.5181C27.1084 29.2771 27.7108 28.9157 28.3133 28.3133C28.9157 27.7108 29.1566 27.2289 29.5181 26.506C29.759 25.9036 29.8795 25.1807 30 24.0964C30 23.0121 30 22.6506 30 20C30 17.3494 30 16.988 30 15.9036C30 14.8193 29.759 14.0964 29.5181 13.494C29.2771 12.8916 28.9157 12.2892 28.3133 11.6867C27.7108 11.0843 27.2289 10.8434 26.506 10.4819C25.9036 10.241 25.1807 10.1205 24.0964 10C23.0121 10 22.7711 10 20 10Z" fill="white"/>
                  <path d="M20 14.8193C17.1084 14.8193 14.8193 17.1084 14.8193 20C14.8193 22.8916 17.1084 25.1807 20 25.1807C22.8916 25.1807 25.1807 22.8916 25.1807 20C25.1807 17.1084 22.8916 14.8193 20 14.8193ZM20 23.3735C18.1928 23.3735 16.6265 21.9277 16.6265 20C16.6265 18.1928 18.0723 16.6265 20 16.6265C21.8072 16.6265 23.3735 18.0723 23.3735 20C23.3735 21.8072 21.8072 23.3735 20 23.3735Z" fill="white"/>
                  <path d="M25.3012 15.9036C25.9666 15.9036 26.506 15.3642 26.506 14.6988C26.506 14.0334 25.9666 13.494 25.3012 13.494C24.6358 13.494 24.0964 14.0334 24.0964 14.6988C24.0964 15.3642 24.6358 15.9036 25.3012 15.9036Z" fill="white"/>
              </svg></a>
              </li>
            </ul>
          </div>    
        </div>
        <div className={styles.line}></div>
        <div className="row">
          <p className={styles.last}>
            &copy;{new Date().getFullYear()} Все права защищены.
          </p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
    
};

export default Footer;