import moment from "moment";

const truncateStr = (string, length) => {
  if (string.length <= length) {
    return string;
  } else {
    return string.slice(0, length) + "...";
  }
};

const elapsedTimeStr = (timestamp, string) => {
  let given = moment(timestamp, "YYYY-MM-DD HH:mm");
  let current = moment();
  const minutes = Math.floor(moment.duration(current.diff(given)).asMinutes());

  if (string === true) {
    if (minutes > 518400) {
      const years = Math.floor(minutes / 518400);
      return `${years} ${years === 1 ? " year ago" : " years ago"}`;
    } else if (minutes > 43200) {
      const months = Math.floor(minutes / 43200);
      return `${months} ${months === 1 ? " month ago" : " months ago"}`;
    } else if (minutes > 1440) {
      const days = Math.floor(minutes / 1440);
      return `${days} ${days === 1 ? " day ago" : " days ago"}`;
    } else if (minutes > 60) {
      const hrs = Math.floor(minutes / 60);
      return `${hrs} ${hrs === 1 ? " hr ago" : " hrs ago"}`;
    } else if (minutes === 0) {
      return "Just now";
    } else {
      return `${minutes} ${minutes === 1 ? " min ago" : " mins ago"}`;
    }
  } else {
    return minutes;
  }
};

const pascalCase = (string) => {
  if (string) {
    return string.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    });
  } else {
    return "";
  }
};

export { truncateStr, elapsedTimeStr, pascalCase };
