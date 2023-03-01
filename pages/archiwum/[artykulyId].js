import information from "../../Components/data/archiwumInformation";
import InformationDetails from "../../Components/Archiwum/informationDetails";
import { useRouter } from "next/router";

const IDs = () => {
  const router = useRouter();
  const turnament = router.query.artykulyId;

  const data2 = information.find((data) => data.ID === turnament);

  return (
    <main className="main">
      <div className="mainBackground">
        <>
          {data2 ? (
            <>
              <h1>{data2.text}</h1>
              {data2.details.map((item2) => (
                <>
                  <InformationDetails key={item2.name} {...item2} />
                </>
              ))}
            </>
          ) : (
            <>
              <h1>Przepraszamy, nie mogliśmy znaleźć żadnych danych.</h1>
            </>
          )}
        </>
      </div>
    </main>
  );
};

export default IDs;
