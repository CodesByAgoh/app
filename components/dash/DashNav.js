import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import styles from "./DashNav.module.css";
import DarkModeContext from "../DarkModeContext";
import Logo from "../Logo";

export default function DashNav({ admin }) {
  const router = useRouter();
  const { pathname } = router;
  const { darkMode } = useContext(DarkModeContext);

  return (
    <nav className="border-r-2 min-h-screen h-full container-gray-dark dark:text-white dark:border-0">
      <Logo className="mx-auto pt-10 w-[120px]" darkMode={darkMode} />
      <div className={styles.nav}>
        <Link href="/">
          <div
            className={
              pathname === "/" ? styles.active : "cursor-pointer hover:text-orange-peel transition"
            }>
            <svg
              width="40"
              height="40"
              viewBox="0 0 41 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.5001 6.14292L30.2917 14.9554V30.25H26.3751V18.5H14.6251V30.25H10.7084V14.9554L20.5001 6.14292ZM20.5001 0.875L0.916748 18.5H6.79175V34.1667H18.5417V22.4167H22.4584V34.1667H34.2084V18.5H40.0834L20.5001 0.875Z"
                fill="#03A9F4"
              />
            </svg>
            <span>Home</span>
          </div>
        </Link>
        {admin && (
          <>
            <Link href="/tickets">
              <div
                className={
                  pathname === "/tickets"
                    ? styles.active
                    : "cursor-pointer hover:text-orange-peel transition"
                }>
                <svg
                  width="35"
                  height="38"
                  viewBox="0 0 35 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.75 3.8V17.1H5.5475L4.515 18.221L3.5 19.323V3.8H22.75ZM24.5 0H1.75C0.7875 0 0 0.855 0 1.9V28.5L7 20.9H24.5C25.4625 20.9 26.25 20.045 26.25 19V1.9C26.25 0.855 25.4625 0 24.5 0ZM33.25 7.6H29.75V24.7H7V28.5C7 29.545 7.7875 30.4 8.75 30.4H28L35 38V9.5C35 8.455 34.2125 7.6 33.25 7.6Z"
                    fill="#03A9F4"
                  />
                </svg>
                <span>Tickets</span>
              </div>
            </Link>
            <Link href="/members">
              <div
                className={
                  pathname === "/members"
                    ? styles.active
                    : "cursor-pointer hover:text-orange-peel transition"
                }>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 42 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.7 17C18.753 17 22.05 13.1871 22.05 8.5C22.05 3.81286 18.753 0 14.7 0C10.647 0 7.35 3.81286 7.35 8.5C7.35 13.1871 10.647 17 14.7 17ZM14.7 4.85714C16.443 4.85714 17.85 6.48429 17.85 8.5C17.85 10.5157 16.443 12.1429 14.7 12.1429C12.957 12.1429 11.55 10.5157 11.55 8.5C11.55 6.48429 12.957 4.85714 14.7 4.85714ZM14.805 29.1429H5.817C7.896 27.9286 11.487 26.7143 14.7 26.7143C14.931 26.7143 15.183 26.7386 15.414 26.7386C16.128 24.9657 17.367 23.5086 18.858 22.3429C17.325 22.0271 15.876 21.8571 14.7 21.8571C9.786 21.8571 0 24.6986 0 30.3571V34H14.7V30.3571C14.7 29.9443 14.742 29.5314 14.805 29.1429ZM30.45 23.0714C26.586 23.0714 18.9 25.5243 18.9 30.3571V34H42V30.3571C42 25.5243 34.314 23.0714 30.45 23.0714ZM32.991 18.6514C34.587 17.6071 35.7 15.64 35.7 13.3571C35.7 10.0057 33.348 7.28571 30.45 7.28571C27.552 7.28571 25.2 10.0057 25.2 13.3571C25.2 15.64 26.313 17.6071 27.909 18.6514C28.665 19.1371 29.526 19.4286 30.45 19.4286C31.374 19.4286 32.235 19.1371 32.991 18.6514Z"
                    fill="#03A9F4"
                  />
                </svg>
                <span>Members</span>
              </div>
            </Link>
            <Link href="/statistics">
              <div
                className={
                  pathname === "/statistics"
                    ? styles.active
                    : "cursor-pointer hover:text-orange-peel transition"
                }>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 43 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.308594 36.8388L16.2345 21.0116L24.7283 29.4415L39.7837 12.6449L42.7777 15.6164L24.7283 35.764L16.2345 27.334L3.49378 40L0.308594 36.8388ZM3.49378 27.3551L16.2345 14.6891L24.7283 23.1191L42.7777 2.97155L39.7837 0L24.7283 16.7966L16.2345 8.3667L0.308594 24.1939L3.49378 27.3551Z"
                    fill="#03A9F4"
                  />
                </svg>
                <span>Statistics</span>
              </div>
            </Link>
          </>
        )}
        <Link href="/personal-projects">
          <div
            className={
              pathname === "/personal-projects"
                ? styles.active
                : "cursor-pointer hover:text-orange-peel transition"
            }>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M36.2033 22.7546C36.4775 22.7546 36.7321 22.8721 36.9475 23.0875L39.4542 25.5942C39.885 26.0054 39.885 26.6908 39.4542 27.1021L37.4958 29.0604L33.4812 25.0458L35.4396 23.0875C35.655 22.8721 35.9292 22.7546 36.2033 22.7546ZM32.3454 26.1817L36.36 30.1963L24.4925 42.0833H20.4583V38.0492L32.3454 26.1817ZM16.5417 36.2083L12.625 40.125H4.79167C2.6375 40.125 0.875 38.3625 0.875 36.2083V8.79168C0.875 6.63751 2.6375 4.87501 4.79167 4.87501H12.9775C13.8 2.60334 15.9542 0.958344 18.5 0.958344C21.0458 0.958344 23.2 2.60334 24.0225 4.87501H32.2083C34.3625 4.87501 36.125 6.63751 36.125 8.79168V16.625L32.2083 20.5417V8.79168H28.2917V12.7083H8.70833V8.79168H4.79167V36.2083H16.5417ZM18.5 4.87501C17.4229 4.87501 16.5417 5.75626 16.5417 6.83334C16.5417 7.91043 17.4229 8.79168 18.5 8.79168C19.5771 8.79168 20.4583 7.91043 20.4583 6.83334C20.4583 5.75626 19.5771 4.87501 18.5 4.87501Z"
                fill="#03A9F4"
              />
            </svg>
            <span>Projects</span>
          </div>
        </Link>
        <Link href="/events">
          <div
            className={
              pathname === "/events"
                ? styles.active
                : "cursor-pointer hover:text-orange-peel transition"
            }>
            <svg
              width="40"
              height="40"
              viewBox="0 0 37 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M27.3713 20.6592L25.2954 18.5833L15.7388 28.14L11.5871 23.9883L9.51125 26.0642L15.7388 32.2917L27.3713 20.6592ZM32.2083 4.87501H30.25V0.958344H26.3333V4.87501H10.6667V0.958344H6.75V4.87501H4.79167C2.61792 4.87501 0.894583 6.63751 0.894583 8.79168L0.875 36.2083C0.875 37.2471 1.28765 38.2433 2.02216 38.9778C2.75668 39.7124 3.7529 40.125 4.79167 40.125H32.2083C34.3625 40.125 36.125 38.3625 36.125 36.2083V8.79168C36.125 6.63751 34.3625 4.87501 32.2083 4.87501ZM32.2083 36.2083H4.79167V14.6667H32.2083V36.2083Z"
                fill="#03A9F4"
              />
            </svg>
            <span>Events</span>
          </div>
        </Link>
        {!admin && (
          <Link href="/discord">
            <div
              className={
                pathname === "/discord"
                  ? styles.active
                  : "cursor-pointer hover:text-orange-peel transition"
              }>
              <svg
                width="40"
                height="40"
                viewBox="0 0 41 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M40.0834 46L29.8022 36.2083L31.0359 40.125H5.81258C4.51413 40.125 3.26885 39.6092 2.3507 38.691C1.43256 37.7729 0.916748 36.5276 0.916748 35.2292V5.85416C0.916748 4.55571 1.43256 3.31043 2.3507 2.39228C3.26885 1.47414 4.51413 0.958328 5.81258 0.958328H35.1876C36.486 0.958328 37.7313 1.47414 38.6495 2.39228C39.5676 3.31043 40.0834 4.55571 40.0834 5.85416V46ZM20.5001 12.3167C15.2517 12.3167 11.5701 14.5687 11.5701 14.5687C13.5872 12.7671 17.1122 11.7292 17.1122 11.7292L16.7792 11.3962C13.4697 11.455 10.4734 13.7462 10.4734 13.7462C7.10508 20.7767 7.3205 26.8475 7.3205 26.8475C10.0622 30.3921 14.1355 30.1375 14.1355 30.1375L15.5259 28.375C13.078 27.8462 11.5309 25.6725 11.5309 25.6725C11.5309 25.6725 15.2126 28.1792 20.5001 28.1792C25.7876 28.1792 29.4692 25.6725 29.4692 25.6725C29.4692 25.6725 27.9222 27.8462 25.4742 28.375L26.8647 30.1375C26.8647 30.1375 30.938 30.3921 33.6797 26.8475C33.6797 26.8475 33.8951 20.7767 30.5268 13.7462C30.5268 13.7462 27.5305 11.455 24.2209 11.3962L23.888 11.7292C23.888 11.7292 27.413 12.7671 29.4301 14.5687C29.4301 14.5687 25.7484 12.3167 20.5001 12.3167ZM16.4463 19.7387C17.7192 19.7387 18.7572 20.855 18.7376 22.2258C18.7376 23.5771 17.7192 24.7129 16.4463 24.7129C15.193 24.7129 14.1747 23.5771 14.1747 22.2258C14.1747 20.855 15.1734 19.7387 16.4463 19.7387ZM24.6126 19.7387C25.8855 19.7387 26.9038 20.855 26.9038 22.2258C26.9038 23.5771 25.8855 24.7129 24.6126 24.7129C23.3592 24.7129 22.3409 23.5771 22.3409 22.2258C22.3409 20.855 23.3397 19.7387 24.6126 19.7387Z"
                  fill="#03A9F4"
                />
              </svg>
              <span>Discord</span>
            </div>
          </Link>
        )}
        <Link href="/settings">
          <div
            className={
              pathname === "/settings"
                ? styles.active
                : "cursor-pointer hover:text-orange-peel transition"
            }>
            <svg
              width="40"
              height="40"
              viewBox="0 0 39 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.4999 12.6667C21.5775 12.6667 23.5699 13.492 25.0389 14.961C26.508 16.43 27.3333 18.4225 27.3333 20.5C27.3333 22.5775 26.508 24.57 25.0389 26.039C23.5699 27.508 21.5775 28.3333 19.4999 28.3333C17.4224 28.3333 15.43 27.508 13.9609 26.039C12.4919 24.57 11.6666 22.5775 11.6666 20.5C11.6666 18.4225 12.4919 16.43 13.9609 14.961C15.43 13.492 17.4224 12.6667 19.4999 12.6667ZM19.4999 16.5833C18.4612 16.5833 17.4649 16.996 16.7304 17.7305C15.9959 18.465 15.5833 19.4612 15.5833 20.5C15.5833 21.5388 15.9959 22.535 16.7304 23.2695C17.4649 24.004 18.4612 24.4167 19.4999 24.4167C20.5387 24.4167 21.5349 24.004 22.2694 23.2695C23.0039 22.535 23.4166 21.5388 23.4166 20.5C23.4166 19.4612 23.0039 18.465 22.2694 17.7305C21.5349 16.996 20.5387 16.5833 19.4999 16.5833ZM15.5833 40.0833C15.0937 40.0833 14.6824 39.7308 14.6041 39.2608L13.8795 34.0713C12.6458 33.5817 11.5883 32.9158 10.5699 32.1325L5.69367 34.1104C5.26284 34.2671 4.73409 34.1104 4.49909 33.6796L0.582422 26.9038C0.462563 26.702 0.420309 26.4634 0.46356 26.2328C0.506811 26.0021 0.632607 25.7951 0.817422 25.6504L4.94951 22.3996L4.81242 20.5L4.94951 18.5417L0.817422 15.3496C0.632607 15.2049 0.506811 14.9979 0.46356 14.7672C0.420309 14.5366 0.462563 14.298 0.582422 14.0963L4.49909 7.32042C4.73409 6.88959 5.26284 6.71334 5.69367 6.88959L10.5699 8.84792C11.5883 8.08417 12.6458 7.41834 13.8795 6.92876L14.6041 1.73917C14.6824 1.26917 15.0937 0.916672 15.5833 0.916672H23.4166C23.9062 0.916672 24.3174 1.26917 24.3958 1.73917L25.1203 6.92876C26.3541 7.41834 27.4116 8.08417 28.4299 8.84792L33.3062 6.88959C33.737 6.71334 34.2658 6.88959 34.5008 7.32042L38.4174 14.0963C38.672 14.5271 38.5545 15.0558 38.1824 15.3496L34.0503 18.5417L34.1874 20.5L34.0503 22.4583L38.1824 25.6504C38.5545 25.9442 38.672 26.4729 38.4174 26.9038L34.5008 33.6796C34.2658 34.1104 33.737 34.2867 33.3062 34.1104L28.4299 32.1521C27.4116 32.9158 26.3541 33.5817 25.1203 34.0713L24.3958 39.2608C24.3174 39.7308 23.9062 40.0833 23.4166 40.0833H15.5833ZM18.0312 4.83334L17.3066 9.94459C14.9566 10.4342 12.8808 11.6875 11.3728 13.4304L6.65326 11.3938L5.18451 13.9396L9.31659 16.975C8.53326 19.2597 8.53326 21.7403 9.31659 24.025L5.16492 27.08L6.63367 29.6258L11.3924 27.5892C12.9003 29.3125 14.9566 30.5658 17.287 31.0358L18.0116 36.1667H20.9883L21.7128 31.0554C24.0433 30.5658 26.0995 29.3125 27.6074 27.5892L32.3662 29.6258L33.8349 27.08L29.6833 24.0446C30.4666 21.7533 30.4666 19.2663 29.6833 16.975L33.8153 13.9396L32.3466 11.3938L27.627 13.4304C26.0882 11.649 24.0008 10.4296 21.6933 9.96417L20.9687 4.83334H18.0312Z"
                fill="#03A9F4"
              />
            </svg>
            <span>Settings</span>
          </div>
        </Link>
        <Link href="/logout">
          <div className="cursor-pointer hover:text-orange-peel transition">
            <svg
              width="40"
              height="40"
              viewBox="0 0 37 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M26.3333 30.2917V24.4167H12.625V16.5833H26.3333V10.7083L36.125 20.5L26.3333 30.2917ZM22.4167 0.916664C23.4554 0.916664 24.4517 1.32931 25.1862 2.06383C25.9207 2.79835 26.3333 3.79457 26.3333 4.83333V8.75H22.4167V4.83333H4.79167V36.1667H22.4167V32.25H26.3333V36.1667C26.3333 37.2054 25.9207 38.2016 25.1862 38.9362C24.4517 39.6707 23.4554 40.0833 22.4167 40.0833H4.79167C3.7529 40.0833 2.75668 39.6707 2.02216 38.9362C1.28765 38.2016 0.875 37.2054 0.875 36.1667V4.83333C0.875 3.79457 1.28765 2.79835 2.02216 2.06383C2.75668 1.32931 3.7529 0.916664 4.79167 0.916664H22.4167Z"
                fill="#03A9F4"
              />
            </svg>
            <span>Logout</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
