import { Card, Checkbox } from 'antd';
const Completed = ({ tasks, selectedId }) => {
    const completedTasks = tasks.filter(task => selectedId.includes(task.id));
    const [obj] = completedTasks
    console.log(completedTasks)
    return (

        <div>
            <Card title="Completed" style={{
                width: 400,
            }}>
                {/* {selectedId.map( () => {
                    return (<li >
                        <Checkbox>{file}</Checkbox>
                    </li>)
                })} */}
                {
                    completedTasks.map(task => <li key={obj.id}>
                        <Checkbox>
                            {obj.value.text}
                        </Checkbox>
                    </li>)
                }
            </Card>
        </div>
    );

}

export default Completed;