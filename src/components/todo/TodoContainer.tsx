import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
    return (
        <div>
            <div className="flex justify-between mb-5">
                <Button className="bg-secondary-gradient  rounded-md  text-white text-xl font-semibold">
                    Add Todo
                </Button>
                <Button className="bg-secondary-gradient  rounded-md  text-white text-xl font-semibold">
                    Filter
                </Button>
            </div>
            <div className="bg-secondary-gradient w-full h-full rounded-xl p-[5px]">
                {/* <div className="bg-white text-2xl font-bold p-3 flex justify-center items-center rounded-md">
                    <p className="">There is no task pending</p>
                </div> */}
                <div className="bg-white p-5 w-full rounded-lg space-y-3">
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;
