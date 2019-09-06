import { getMember } from "../data/MemberData"
import { Circle } from "react-konva"

export const enlargeCircle = async (circleRef: any, duration: number = 0.2) => {
  return new Promise(resolve => {
    circleRef.to({
      scaleX: 1.3,
      scaleY: 1.3,
      duration,
      onFinish: () => {
        resolve(circleRef)
      },
    })
  })
}

export const shrinkCircle = (circleRef: any, duration: number) => {
  return new Promise(resolve => {
    circleRef.to({
      scaleX: 1,
      scaleY: 1,
      duration,
      onFinish: () => {
        resolve(circleRef)
      },
    })
  })
}

// export const animateCircle = async (circleRef: any, duration: number) => {
//   return new Promise(resolve => {
//     enlargeCircle(circleRef, duration)
//       .then(ref => {
//         shrinkCircle(ref, duration)
//       })
//       .then(resolve(circleRef))
//   })
// }

export const generateCircles = (seatingData: any[],
                                members: object,
                                parties: object,
                                callback: any,
                                activeMember: number) => {
  let jsx: any[] = []
  console.log("Parties", parties)
  seatingData.forEach(element => {
    let active = activeMember === element.id
    let currentMember = getMember(members, element.id)

    jsx.push(
      <Circle
        ref={node => {
          if (active && node != null) {
            enlargeCircle(node, 0.2)
          }
        }}
        x={element.x}
        y={element.y}
        radius={9}
        fill={"#FEFFFE"}
        key={element.id}
        onClick={() => {
          callback(element.id)
        }}
        onMouseEnter={item => {
          document.body.style.cursor = "pointer"
          // enlargeCircle(item.target)
        }}
        onMouseLeave={item => {
          // shrinkCircle(item.target)
          document.body.style.cursor = "default"
        }}
      />
    )
  })
  return jsx
}