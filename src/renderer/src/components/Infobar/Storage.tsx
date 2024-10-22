import { ProgressBar } from "react-bootstrap";

const Storage: React.FC<{
  size: string;
  used: string;
}> = ({ size, used }) => {
  const numUsed = parseInt(used, 10);
  const numSize = parseInt(size, 10);
  // size: '112G'
  // used: '96G'
  // free: '16G'
  // percent: '86%'

  const percentCalc = Math.round((numUsed / numSize) * 100);
  const success = Math.min(80, percentCalc);
  const warning = Math.min(15, Math.max(0, percentCalc - 80));
  const danger = Math.min(5, Math.max(0, percentCalc - 95));
  const free = numSize - numUsed;

  console.log({ percentCalc, success, warning, danger });

  return (
    <div id="storage-div">
      <small className="float-start">
        Used: {used} of {size} ({percentCalc}%)
      </small>
      <small className="float-end">Free: {free}G</small>
      <br />
      <ProgressBar>
        <ProgressBar striped variant="success" now={success} key={1} />
        <ProgressBar striped variant="warning" now={warning} key={2} />
        <ProgressBar striped variant="danger" now={danger} key={3} />
      </ProgressBar>
    </div>
  );
};

export { Storage };
