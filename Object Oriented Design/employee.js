//add rank to calls
//seperate call and caller
class CallCenter {
  avaliableRespondents = [];
  avaliableManagers = [];
  avaliableDirectors = [];
  callQueue = [];

  dispatchCall(Call call) {
    let callToHandle = call;
    if (callQueue.length !== 0) {
      callQueue.push(call);
      callToHandle = callQueue.shift();
    }

    if (avaliableRespondents.length !== 0 && callToHandle.getRank() === 0) {
      const avaliableRespondent = avaliableRespondent.shift();
      //assign call to avaliable
      avaliableRespondent.handleCallAsRespondent(callToHandle);
    } else if (avaliableManagers.length !== 0 && callToHandle.getRank() <= 1) {
      const avaliableManager = avaliableManager.shift();
      avaliableManager.handleCallAsManager(callToHandle);
    } else if (avaliableDirectors.length !== 0 && callToHandle.getRank() <= 2) {
      const avaliableDirector = avaliableDirector.shift();
      avaliableDirector.handleCallAsDirector(callToHandle);
    } else {
      callQueue.push(call);
    }
  }

}

class Call {
  constructor(name, number, rank) {
    this.name = name;
    this.number = number;
    this.rank = rank;
  }

  reply(message) {

  }

  getRank() {
    return this.rank
  }

  setRank(rank) {
    this.rank = rank;
  }

  incrimentRank() {
    this.rank = this.rank + 1;
  }

  decreaseRank() {
    this.rank = this.rank - 1;
  }

  disconnect() {

  }
}

class Employee extends CallCenter{
  constructor(name, seniority, avaliable) {
    this.avaliable = avaliable;
    this.name = name;
    this.seniority = seniority
  }

  isAvaliable() {
    return this.avaliable;
  }

  connectToCall(call) {

  }

}

class Respondent extends Employee{
  #seniority = 0;

  constructor(name, avaliable) {
    super(name, #seniority, avaliable);
  }

  handleCallAsRespondent(call) {
    /* handles call */
    connectToCall(call);
    avaliableRespondents.push(this);
  }

}

class Manager extends Employee{
  #seniority = 1;

  constructor(name, avaliable) {
    super(name, #seniority, avaliable);
  }

  handleCallAsManager(call) {
    connectToCall(call);
    avaliableManagers.push(this);
  }
}

class Director extends Employee{
  #seniority = 2;

  constructor(name, avaliable) {
    super(name, #seniority, avaliable);
  }

  handleCallAsDirector(call) {
    connectToCall(call);
    avaliableDirectors.push(this);
  }
}