import logo from "../../../assets/logoCubos.png";
export const BolsaCubos = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "fit-content",
                height: "fit-content",
                position: "relative",
            }}
        >
            <svg
                width="43"
                height="58"
                viewBox="0 0 43 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M29.6202 12.3101V12.3661H29.6763H40.4765L42.4623 57.6786H0.732442L2.71733 12.3661H13.5266H13.5826V12.3101V8.06053C13.5826 3.64722 17.1802 0.056073 21.6019 0.056073C26.0244 0.056073 29.6202 3.64721 29.6202 8.06053V12.3101ZM27.8573 12.3652H27.9133V12.3092V8.05964C27.9133 4.58646 25.0823 1.75708 21.6029 1.75708C18.1226 1.75708 15.2879 4.5854 15.2879 8.05964V12.3092V12.3652H15.3439H27.8573Z"
                    fill="#252531"
                    stroke="#252531"
                    strokeWidth="0.112146"
                />
            </svg>
            <img
                style={{ position: "absolute", left: "6.2px", top: "20px" }}
                src={logo}
                alt="logo"
            />
        </div>
    );
};
