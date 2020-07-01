int prevVoteResult=1

default flow if_changed(int voteResult):
    if(voteResult == prevVoteResult):
        prevVoteResult = voteResult
        voteResult = 1
    else:
        prevVoteResult = voteResult
        next(voteResult)
