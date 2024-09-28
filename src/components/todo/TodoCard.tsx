import { Button } from "../ui/button";

const TodoCard = () => {
    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3 border">
            <input type="checkbox" name="" id="" />
            <p className="font-semibold">Todo title</p>
            <p>time</p>
            <p>description</p>
            <div className="space-x-5">
                <Button className="bg-red-500">Del</Button>
                <Button className="bg-green-500">edit</Button>
            </div>
        </div>
    );
};

export default TodoCard;
