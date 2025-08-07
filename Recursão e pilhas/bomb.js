function bomb(timer) {
  console.log(timer);
  if (timer == 0) {
    return "BOOOOM!";
  }

  timer--;

  return bomb(timer);
}

export default bomb;
