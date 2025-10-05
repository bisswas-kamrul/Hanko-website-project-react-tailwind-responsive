import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

const Answer = () => {
  return (
   <>
   <div className="bg-black overflow-x-hidden">
    <Container>
    <div className="md:h-[350px] bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url('/answer.jpg')`}}>
      <h3 className="font-HeaderTextColor font-semibold md:text-4xl text-white pl-7 pt-5 leading-15 relative inline-block after:absolute after:conten-[' '] md:after:h-[1px] after:w-30 after:bg-[#FF4655] after:bottom-5 after:-right-2">
        FREQUENTLY ASKED QUESTION <br></br>“QUESTION & ANSWER”
        </h3>
        <Flex className={"flex-col md:flex-row"}>
            <div className=" md:w-[580px]">
                <h6 className="font-HeaderTextColor font-semibold text-sm text-[#FF4655] pl-7 pt-5">HOW TO DOWNLOAD THE GAME ?</h6>
                <p className="font-HeaderTextColor font-normal text-xs text-[#6666] pl-7 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste,<br></br>sed error at adipisci repellat rem maiores provident voluptatem ipsum<br></br>autem fugiat.</p>
            </div>
            <div className="w-[580px]">
                <h6 className="font-HeaderTextColor font-semibold text-sm text-white pl-7 pt-5">IS THERE ANY AGE RESTRICTIONS ?</h6>
                <p className="font-HeaderTextColor font-normal text-xs text-[#6666] pl-7 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste,<br></br>sed error at adipisci repellat rem maiores provident voluptatem ipsum<br></br>autem fugiat.</p>
            </div>
            <div className="w-[580px]">
                <h6 className="font-HeaderTextColor font-semibold text-sm text-[#FF4655] pl-7 pt-5">HOW TO BECOME A TEAM MEMBER ?</h6>
                <p className="font-HeaderTextColor font-normal text-xs text-[#6666] pl-7 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste,<br></br>sed error at adipisci repellat rem maiores provident voluptatem ipsum<br></br>autem fugiat.</p>
            </div>
            <div className="w-[580px]">
                <h6 className="font-HeaderTextColor font-semibold text-sm text-[#65FF45] pl-7 pt-5">IS THERE ANY REWARD FOR WINNERS ?</h6>
                <p className="font-HeaderTextColor font-normal text-xs text-[#6666] pl-7 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste,<br></br>sed error at adipisci repellat rem maiores provident voluptatem ipsum<br></br>autem fugiat.</p>
            </div>
        </Flex>
    </div>
   </Container>
   </div>
   </>
  )
}

export default Answer