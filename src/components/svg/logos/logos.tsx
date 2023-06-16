import { component$ } from '@builder.io/qwik'

type SVGProps = {
  classCustom?: string
}

export const LogoCapcom = component$(({ classCustom }: SVGProps) => {
  return (
    <svg
      class={classCustom}
      width="189"
      height="34"
      viewBox="0 0 189 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M127.175 0.111832C121.533 0.111832 116.502 2.58886 113.231 6.45699C112.266 5.19627 111.085 3.872 109.796 2.93979C107.089 0.885781 103.58 0.260725 99.8298 0.158068C93.4807 -0.0157215 88.4027 3.47106 86.0642 7.3914C84.0888 3.38492 82.3166 1.29274 75.4433 0.945165H58.7873L58.7911 8.00216C58.7911 8.00216 59.5832 8.2593 59.851 8.55807C60.0744 8.80733 60.2233 9.4957 60.2233 9.4957L60.1841 25.2032C60.1841 25.2032 59.7485 24.8821 59.5749 24.6764C59.2517 24.2934 58.7932 23.3882 58.7932 23.3882L50.2593 0.937638L39.4384 0.945165L30.0361 25.9323V20.5839H23.2696C22.7368 22.0773 21.2408 23.086 19.4363 23.086C18.4854 23.086 17.4688 22.8581 16.6449 22.3548C15.5714 21.6991 14.7691 20.9203 14.1084 19.5366C13.5886 18.2561 13.1909 16.6882 13.1448 15.3011C13.3032 12.5577 14.1231 11.5799 15.6242 10.4484C15.957 10.1976 16.8867 9.99699 17.1548 9.9957C17.7445 9.99288 18.236 10.3565 18.5023 10.8925C18.8898 11.6721 18.3227 12.6164 17.7619 13.2882L23.2326 17.1194L31.6819 8.13226C28.7343 3.35644 23.3479 0.159144 17.1918 0.159144C7.87161 0.159144 0.316406 7.4878 0.316406 16.528C0.316406 25.5681 7.62983 32.4046 17.1918 33.1419L18.4008 33.1914H31.2631V33.185H61.2091V33.1828L72.4678 33.1667V33.1484H74.229V26.4237C74.229 26.4237 73.2855 26.2237 72.8973 25.9549C72.4896 25.6726 72.4509 25.228 72.4509 25.228C72.4436 25.0565 72.4776 24.9251 72.5662 24.8129C72.6531 24.703 72.8564 24.6282 72.9332 24.6119C74.0959 24.3646 75.2815 24.0264 76.4682 23.5925C79.6347 22.4348 82.2993 20.7877 84.1909 18.9678C85.4567 26.5702 92.0291 32.1178 99.9747 33.0441C100.494 33.1046 100.941 33.1503 101.426 33.1678C101.555 33.1724 101.813 33.1624 101.813 33.1624H113.051L113.016 27.5408C115.939 30.8388 121.633 34 127.38 34C132.076 34 136.288 31.9098 139.257 29.3251L139.233 33.2129H153.423L153.495 27.2649L157.195 27.314V27.2484L162.159 27.2925V33.1914H177.293V25.3753C177.293 25.3753 176.647 25.3332 176.394 25.1538C176.052 24.9112 175.698 24.0968 175.698 24.0968L173.571 9.73658C173.571 9.73658 173.635 8.7759 173.909 8.41723C174.135 8.12212 174.876 7.87637 174.876 7.87637V0.945182H173.522H171.345H159.79V1.14196L158.725 4.77959L157.195 1.1183V0.945182H157.123L157.082 0.847333L157.079 0.945182H142.521V8.22045L141.526 6.84411C138.795 2.79664 134.002 0.111832 128.542 0.111832C128.32 0.111832 128.098 0.115898 127.878 0.124735C127.645 0.116169 127.41 0.111832 127.175 0.111832ZM29.8489 27.3538L29.8478 27.4247H29.7843C29.806 27.4012 29.8273 27.3774 29.8489 27.3538Z"
        fill="#0C4DA2"
      />
      <path
        d="M17.1805 3.23471C9.49755 3.28387 3.22266 8.9729 3.22266 16.415C3.22266 23.857 10.1496 30.2497 18.5344 30.0572L26.682 30.0806V23.5599H25.1432C24.6597 24.7893 22.4016 25.9919 20.7644 25.9919C19.9016 25.9919 17.7295 25.8727 16.926 25.5866C15.5074 25.0815 13.4833 24.3565 11.7233 21.3495C11.2517 20.2954 9.92366 17.7266 10.2204 13.9795C10.3641 11.7211 11.7753 8.90188 14.3075 7.62518C15.4117 7.06849 16.5232 6.97715 18.4749 7.15719C19.8761 7.28645 21.2683 8.28797 21.7544 9.49C22.1303 10.4197 22.0223 11.5525 21.5797 12.1978C21.5482 12.2438 21.5475 12.2846 21.554 12.3286C21.559 12.362 21.6017 12.4177 21.6017 12.4177L22.3729 13.0302C22.3729 13.0302 22.5925 13.1853 22.8489 13.1783C22.9979 13.1743 23.2641 13.01 23.2641 13.01L27.6685 8.31143C24.9456 4.57647 20.1066 3.23471 17.1805 3.23471Z"
        fill="#FFCB08"
      />
      <path
        d="M127.247 3.1086C119.102 3.1086 112.499 9.33657 112.499 17.0194C112.499 24.7021 119.102 30.9301 127.247 30.9301C135.392 30.9301 141.995 24.7021 141.995 17.0194C141.995 9.33657 135.392 3.1086 127.247 3.1086ZM127.343 7.43333C131.536 7.43333 133.783 10.4834 134.694 14.119C134.955 15.1597 134.849 18.62 134.693 19.7722C134.22 23.2857 131.395 26.7097 127.295 26.6043C123.301 26.5016 120.629 24.611 119.801 19.5264C119.558 18.0391 119.554 16.2523 119.752 14.7581C120.324 10.4255 123.15 7.43333 127.343 7.43333Z"
        fill="#FFCB08"
      />
      <path
        d="M41.4629 3.97205C41.4629 3.97205 34.9865 21.787 33.826 25.0312C32.6655 28.2754 31.3604 28.1774 31.3604 28.1774L31.4566 30.143L39.284 30.1409L39.2903 28.2527C39.2903 28.2527 38.7881 28.2265 38.4198 27.8828C37.7055 27.2162 38.1575 25.8753 38.1575 25.8753L39.9673 21.1688L48.0051 21.186C48.0051 21.186 49.5719 25.1627 49.9556 26.4753C50.4563 28.1878 48.8926 28.2183 48.8926 28.2183V30.1376L58.791 30.1323L58.7847 28.2344C58.7847 28.2344 58.1952 28.143 57.5683 27.5871C56.8571 26.9565 56.373 25.6559 56.373 25.6559L48.2664 3.99033L41.4629 3.97205ZM43.7868 9.44947L46.4703 17.0441L41.2726 17.0677L43.7868 9.44947Z"
        fill="#FFCB08"
      />
      <path
        d="M61.9539 3.94409L61.9158 6.12796C61.9158 6.12796 62.545 6.31122 63.1471 6.99033C63.4663 7.35038 63.2687 11.9204 63.2687 11.9204L63.2581 26.5495C63.2581 26.5495 63.4632 27.1261 62.7747 27.7054C62.5149 27.9241 62.2847 28.1559 61.883 28.1914L61.8354 30.1376L71.0093 30.1602L71.0316 28.1807C71.0316 28.1807 70.707 28.0505 70.198 27.5839C69.9107 27.3205 69.7337 26.9414 69.7379 26.5635C69.7456 25.2419 69.776 23.9721 69.7697 22.6817C72.9831 21.8949 75.7573 20.5607 76.8386 20.1559C80.9033 18.5071 84.0574 15.8893 83.8727 11.2194C83.8378 7.91078 82.187 5.19887 78.6505 4.58603C77.0385 4.11253 76.2984 4.02979 75.6624 3.99355L61.9539 3.94409ZM72.4458 7.65307C73.4353 7.63375 74.6008 7.86423 75.498 8.32364C76.6163 9.07832 77.2966 9.86012 77.2966 11.514C77.3427 12.2915 77.123 12.96 76.7551 13.6398C76.372 14.2898 75.2131 15.5376 74.4814 16.2515C72.3422 17.8061 71.5767 18.2619 69.8773 19.0571L69.85 7.9742C70.7557 7.80055 71.5681 7.65899 72.4458 7.65307Z"
        fill="#FFCB08"
      />
      <path
        d="M100.735 3.25209C93.0522 3.30125 86.7773 8.99028 86.7773 16.4324C86.7773 23.8744 93.7042 30.2671 102.089 30.0746L110.237 30.098V23.5773H108.698C108.214 24.8067 105.956 26.0093 104.319 26.0093C103.456 26.0093 101.284 25.8901 100.481 25.604C99.0621 25.0989 97.038 24.3739 95.278 21.3669C94.8064 20.3128 93.4784 17.744 93.7751 13.9969C93.9188 11.7385 95.3299 8.91926 97.8622 7.64256C98.9663 7.08587 100.078 6.99453 102.03 7.17457C103.431 7.30383 104.823 8.30535 105.309 9.50738C105.685 10.437 105.577 11.5699 105.134 12.2152C105.103 12.2612 105.102 12.302 105.109 12.3459C105.114 12.3794 105.156 12.4351 105.156 12.4351L105.928 13.0476C105.928 13.0476 106.147 13.2026 106.404 13.1957C106.553 13.1917 106.819 13.0274 106.819 13.0274L111.223 8.3288C108.5 4.59385 103.661 3.25209 100.735 3.25209Z"
        fill="#FFCB08"
      />
      <path
        d="M145.681 3.9957L145.69 5.87204C145.69 5.87204 146.497 6.09292 146.817 6.35054C147.184 6.64506 147.091 7.16774 147.091 7.16774C147.091 7.16774 144.163 25.6632 144.1 26.0065C144.031 26.3758 143.935 27.2386 143.424 27.7183C142.916 28.1953 142.33 28.2914 142.33 28.2914L142.322 30.1419H150.519V28.4129C150.519 28.4129 149.852 28.3605 149.408 27.9086C148.963 27.4568 149.091 26.2151 149.091 26.2151L151.109 12.2419L155.212 24.2677L160.209 24.3376L164.269 11.3871L166.535 26.2839C166.535 26.2839 166.808 27.4038 166.219 27.9785C165.765 28.4208 165.108 28.4828 165.108 28.4828V30.2118H174.604L174.596 28.3613C174.596 28.3613 174.383 28.4353 173.844 27.9957C173.527 27.7372 173.374 26.5844 173.305 26.2151C173.242 25.8718 170.683 7.26129 170.683 7.26129C170.683 7.26129 170.639 6.49283 171.054 6.1C171.352 5.81686 171.964 5.54839 171.964 5.54839L171.949 4.01613L162.09 4.0043L158.482 14.5688L155.041 4.0043L145.681 3.9957Z"
        fill="#FFCB08"
      />
      <path
        d="M183.595 0C180.987 0 178.873 2.14911 178.873 4.80018C178.873 7.45124 180.987 9.60035 183.595 9.60035C186.202 9.60035 188.317 7.45124 188.317 4.80018C188.317 2.14911 186.202 0 183.595 0ZM183.595 0.645347C185.852 0.645347 187.682 2.50553 187.682 4.80018C187.682 7.09482 185.852 8.955 183.595 8.955C181.337 8.955 179.507 7.09482 179.507 4.80018C179.507 2.50553 181.337 0.645347 183.595 0.645347Z"
        fill="#0C4DA2"
      />
      <path
        d="M181.164 1.90108V7.58387H182.343V5.61398H183.909L185.206 7.60861L186.531 7.6L184.948 5.48602C185.598 5.21636 186.058 4.55122 186.058 3.77205C186.058 2.76748 185.294 1.9505 184.343 1.92903V1.90538H182.343V1.90108H181.164ZM182.343 3.04839L184.305 3.05914C184.704 3.12794 184.968 3.16958 184.958 3.77834C184.946 4.42978 184.453 4.51658 184.305 4.52151L182.343 4.54516V3.04839Z"
        fill="#0C4DA2"
      />
    </svg>
  )
})
