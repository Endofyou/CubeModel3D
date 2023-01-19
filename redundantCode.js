function drawShape() {
  for (let i = 0; i < shape3D.face.length; i++) {
    let x = shape3D.vertice[shape3D.face[i][0]].x
    let y = shape3D.vertice[shape3D.face[i][0]].y
    let z = shape3D.vertice[shape3D.face[i][0]].z

    const xyHyp = Math.sqrt(x ** 2 + y ** 2)
    const xyAngle = Math.atan2(y, x) + shape3D.xySkew
    x = xyHyp * Math.cos(xyAngle)
    y = xyHyp * Math.sin(xyAngle)
    const yzHyp = Math.sqrt(y ** 2 + z ** 2)
    const yzAngle = Math.atan2(z, y) + shape3D.yzSkew
    y = yzHyp * Math.cos(yzAngle)
    z = yzHyp * Math.sin(yzAngle)
    const zxHyp = Math.sqrt(z ** 2 + x ** 2)
    const zxAngle = Math.atan2(x, z) + shape3D.zxSkew
    z = zxHyp * Math.cos(zxAngle)
    x = zxHyp * Math.sin(zxAngle)

    ctx.beginPath()
    ctx.moveTo(shape3D.x + x, shape3D.y + y)
    for (let j = 1; j < shape3D.face[i].length; j++){
      let x = shape3D.vertice[shape3D.face[i][j]].x
      let y = shape3D.vertice[shape3D.face[i][j]].y
      let z = shape3D.vertice[shape3D.face[i][j]].z

      const xyHyp = Math.sqrt(x ** 2 + y ** 2)
      const xyAngle = Math.atan2(y, x) + shape3D.xySkew
      x = xyHyp * Math.cos(xyAngle)
      y = xyHyp * Math.sin(xyAngle)
      const yzHyp = Math.sqrt(y ** 2 + z ** 2)
      const yzAngle = Math.atan2(z, y) + shape3D.yzSkew
      y = yzHyp * Math.cos(yzAngle)
      z = yzHyp * Math.sin(yzAngle)
      const zxHyp = Math.sqrt(z ** 2 + x ** 2)
      const zxAngle = Math.atan2(x, z) + shape3D.zxSkew
      z = zxHyp * Math.cos(zxAngle)
      x = zxHyp * Math.sin(zxAngle)

      ctx.lineTo(shape3D.x + x, shape3D.y + y)
    }
    ctx.closePath()
    ctx.strokeStyle = 'blue'
    ctx.lineWidth = 4
    ctx.stroke()
  }
}