import React from 'react';

import { Colors, HexColors } from 'constants/Colors';

interface Props {
  color: Colors;
  className?: string;
}

const BBGVLogo: React.FC<Props> = ({ color, className = '' }) => {
  return (
    <svg
      className={className}
      width="184"
      height="22"
      viewBox="0 0 184 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M76.0712 20.1955C77.8848 20.1955 79.1403 19.1073 79.6146 17.6844H79.6425L79.6983 20.0281H82.0978V10.5976H76.7967V13.3877H78.9729C78.8334 16.0383 78.0801 17.1543 76.6293 17.1543C75.0668 17.1543 74.1461 15.3128 74.1461 10.4302C74.1461 5.54755 74.9273 3.9293 76.4619 3.9293C77.6895 3.9293 78.2754 4.93373 78.5544 8.11442L81.8188 7.72381C81.2608 2.81327 79.7541 0.720703 76.4898 0.720703C72.6394 0.720703 70.5469 3.76189 70.5469 10.4581C70.5469 17.0706 72.1372 20.1955 76.0712 20.1955Z"
        fill={HexColors[color]}
      />
      <path
        d="M46.9434 19.9718H52.105C55.2857 19.9718 57.7131 18.5489 57.7131 14.7822C57.7131 11.6294 56.318 10.5692 54.6161 10.1507V10.0949C56.0669 9.67639 57.3225 8.64406 57.3225 5.68657C57.3225 2.00366 54.8672 0.915527 51.7981 0.915527H46.9434V19.9718ZM50.4589 8.95097V3.90092H51.6865C53.1931 3.90092 53.7791 4.43103 53.7791 6.38409C53.7791 8.33715 53.0815 8.95097 51.6865 8.95097H50.4589ZM50.4589 17.2096V11.4899H51.7144C53.3047 11.4899 54.1418 12.2433 54.1418 14.3358C54.1418 16.3168 53.4722 17.1817 51.8818 17.1817H50.4589V17.2096Z"
        fill={HexColors[color]}
      />
      <path
        d="M58.9414 19.9718H64.1031C67.2838 19.9718 69.7111 18.5489 69.7111 14.7822C69.7111 11.6294 68.3161 10.5692 66.6141 10.1507V10.0949C68.065 9.67639 69.3205 8.64406 69.3205 5.68657C69.3205 2.00366 66.8652 0.915527 63.7962 0.915527H58.9414V19.9718ZM62.4569 8.95097V3.90092H63.6845C65.1912 3.90092 65.7771 4.43103 65.7771 6.38409C65.7771 8.33715 65.0796 8.95097 63.6845 8.95097H62.4569ZM62.4569 17.2096V11.4899H63.7124C65.3028 11.4899 66.1398 12.2433 66.1398 14.3358C66.1398 16.3168 65.4702 17.1817 63.8799 17.1817H62.4569V17.2096Z"
        fill={HexColors[color]}
      />
      <path d="M43.8741 8.95068H0V11.5176H43.8741V8.95068Z" fill={HexColors[color]} />
      <path
        d="M95.8036 19.7978H99.4014L103.59 0.703942H100.404L98.7847 9.21009C98.4249 11.2146 98.1422 12.5766 97.8595 15.1207H97.7567C97.4483 12.5509 97.1657 11.0861 96.8059 9.13299L95.2126 0.703942H91.6405L95.8036 19.7978ZM104.427 19.7207H113.499V16.714H108.025V11.1889H111.777V8.28495H108.025V3.78774H113.267V0.703942H104.427V19.7207ZM114.679 19.7207H117.506V6.71735H117.583C117.789 7.38551 118.38 9.0816 118.894 10.4179L122.62 19.7207H125.704V0.703942H122.851V12.5252H122.774C122.466 11.4201 122.029 10.2637 121.515 8.74752L118.457 0.703942H114.679V19.7207ZM130.059 19.7207H133.682V3.78774H137.1V0.703942H126.667V3.78774H130.059V19.7207ZM143.338 19.9263C147.244 19.9263 148.657 17.7676 148.657 13.6816V0.703942H145.291V13.5531C145.291 15.9174 144.803 16.8939 143.415 16.8939C142.002 16.8939 141.513 15.9174 141.513 13.5017V0.703942H137.916V13.733C137.916 17.7162 139.38 19.9263 143.338 19.9263ZM158.423 11.8827C160.325 10.7777 160.864 8.61903 160.864 6.74305C160.864 2.42573 158.628 0.703942 155.082 0.703942H150.405V19.7207H153.926V12.9363H155.211L157.6 19.7207H161.173L158.423 11.8827ZM153.926 10.0581V3.78774H155.031C156.624 3.78774 157.344 4.4302 157.344 6.82014C157.344 9.31288 156.624 10.0581 155.082 10.0581H153.926ZM162.464 19.7207H171.536V16.714H166.062V11.1889H169.814V8.28495H166.062V3.78774H171.304V0.703942H162.464V19.7207ZM177.45 19.9777C180.611 19.9777 182.718 17.9475 182.718 14.9922C182.718 9.72405 175.78 8.31065 175.78 5.07266C175.78 4.12182 176.32 3.53076 177.245 3.53076C178.427 3.53076 178.992 4.55869 179.429 6.53746L182.616 5.74081C181.87 2.52852 180.56 0.421259 177.373 0.421259C174.264 0.421259 172.259 2.29724 172.259 5.30394C172.259 10.5207 179.198 11.9341 179.198 15.1978C179.198 16.1229 178.684 16.971 177.476 16.971C175.985 16.971 175.369 15.7118 174.958 13.6045L171.822 14.1699C172.465 17.4849 173.698 19.9777 177.45 19.9777Z"
        fill={HexColors[color]}
      />
    </svg>
  );
};

export default BBGVLogo;