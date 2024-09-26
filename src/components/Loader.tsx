import { Html, useProgress } from '@react-three/drei'

export const Loader: React.FC = () =>{
  const { progress } = useProgress()
  return <Html center>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.5em',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '10px'
  }}>
    <div>Loading: {progress.toFixed(0)}%</div>
    <div style={{
      width: '200px',
      height: '10px',
      background: '#555',
      borderRadius: '5px',
      marginTop: '10px',
      overflow: 'hidden'
    }}>
      <div
        style={{
          width: `${progress}%`,
          height: '100%',
          background: '#fff',
          borderRadius: '5px',
          transition: 'width 0.3s'
        }}
      />
      </div>
    </div>
  </Html>
}