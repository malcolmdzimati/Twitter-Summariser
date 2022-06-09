// import { Tweet } from 'react-twitter-widgets';
import { Link } from "react-router-dom";
import Tweet from "../Tweet/Tweet";
import { Key, useState } from "react";

// importing mock data
import Text from "../Text/Text";
import DraftCard from "../DraftCard/DraftCard";

function GenReport(props: any) {
  // const [{id}, changeID] = useState("");

  let generate = 1;

  console.log("generate is " + generate);

  // let { val } = useParams();
  const [state, setState] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  // console.log(localStorage.getItem("id"));
  // console.log(val);

  // ################ API FOR GETTING REPORT ###########################

  const getReportEndpoint =
    "https://xprnnqlwwi.execute-api.us-east-1.amazonaws.com/dev/getReport";

  const genRep = async () => {
    // POST request using fetch with error handling

    if (generate === 1) {
      const requiredData = {
        reportID: localStorage.getItem("draftReportId"),
      };

      const requestOptions = {
        method: "POST",
        body: JSON.stringify(requiredData),
      };

      fetch(getReportEndpoint, requestOptions)
        .then(async (response) => {
          const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");

          const data = isJson && (await response.json());

          setState(data.report.Report);
          setTitle(data.report.title);
          setAuthor(data.report.author);
          setDate(data.report.dateCreated.substring(0, 16));
          // console.log(await data.report.dateCreated);

          // check for error response
          if (!response.ok) {
            // error
            // signUpFailure(true);

            return;
          }

          // await props.readyToLogIN();
        })
        .catch((error) => {
          console.log("Error retrieving report");
          // signUpFailure(true);
        });
    }

    generate = 0;
  };

  genRep();
  // ###################################################################

  console.log("generate is " + generate);

  // processing api response
  const apiResponse = [<div key={"begining div"}></div>];

  let textPosition = -1;
  // console.log(state);

  const increment = () => {
    textPosition++;

    return textPosition;
  };

  console.log("Size of the given array is " + state.length);

  state.map((data: any, index: number) =>
    apiResponse.push(
      <div key={index}>
        {/* {data.blockType === "RICHTEXT" ? (
          <Text keyValue={index} textData={data} position={data.position} />
        ) : (
          <Text keyValue={index} position={data.position - 1} />
        )}
        
        {data.blockType === "TWEET" && (
          <Tweet tweetData={data} position={data.position} />
        )} */}

        {/* {index % 2 === 0 && ( */}
        <Text keyValue={index} data={data} position={index} />
        {/* )} */}

        {/* {index % 2 === 1 &&  */}
        <Tweet data={data} position={index} />
        {/* } */}
      </div>
    )
  );

  // console.log("Total content is " + textPosition);
  // textPosition = 0;

  return (
    <div className="mt-4 p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <br />
      <h2 className="italic font-bold">Created By: {author}</h2>
      <h3 className="italic text-xs">Date Created: {date}</h3>
      <br />

      <div className="grid grid-cols gap-4 content-center">
        {apiResponse}
        {/* <Text position={(textPosition += 1)} /> */}
      </div>

      <Link
        to="/"
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button"
      >
        {" "}
        PUBLISH REPORT
      </Link>
    </div>
  );
}

export default GenReport;
