import PfpWrapper from './ProfilePic';
import '../assets/main.css';
import '../assets/groups.css';

export const GroupComponent = (props: any) => {
  const redirectClick = () => {
    window.location.href = `/friends?groupId=${props.groupId}`;
  };
  return (
    <div className="group-container" onClick={redirectClick}>
      <h1>{props.groupName}</h1>
      <div className="group-members">
        <PfpWrapper />
        <p>{props.memberText}</p>
      </div>
    </div>
  );
};

export default GroupComponent;
