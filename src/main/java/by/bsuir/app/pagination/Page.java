package by.bsuir.app.pagination;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class Page<T> {
    List<T> object;

    public int getTotalPages() {
        return object.size();
    }
}
