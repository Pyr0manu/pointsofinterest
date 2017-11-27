package fr.braddy.models;

import java.util.List;
import java.util.Stack;
import java.util.ArrayList;

public class TSPNearestNeighbour {
    private int numberOfNodes;
    private Stack<Integer> stack;

    public TSPNearestNeighbour()
    {
        this.stack = new Stack<Integer>();
    }

    public List<Integer> tsp(double adjacencyMatrix[][])
    {
        List<Integer> orderList = new ArrayList<>();
        this.numberOfNodes = adjacencyMatrix[1].length - 1;
        int[] visited = new int[this.numberOfNodes + 1];
        visited[0] = 1;
        this.stack.push(1);
        int element, dst = 0, i;
        int min = Integer.MAX_VALUE;
        boolean minFlag = false;
        orderList.add(1);

        while (!this.stack.isEmpty())
        {
            element = this.stack.peek();
            i = 0;
            min = Integer.MAX_VALUE;
            while (i <= this.numberOfNodes)
            {
                if (adjacencyMatrix[element][i] > 1 && visited[i] == 0)
                {
                    if (min > adjacencyMatrix[element][i])
                    {
                        min = (int) adjacencyMatrix[element][i];
                        dst = i;
                        minFlag = true;
                    }
                }
                i++;
            }
            if (minFlag)
            {
                visited[dst] = 1;
                this.stack.push(dst);
                orderList.add(dst + 1);
                minFlag = false;
                continue;
            }
            this.stack.pop();
        }
        return orderList;
    }
}
