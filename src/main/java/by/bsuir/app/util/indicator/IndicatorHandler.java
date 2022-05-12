package by.bsuir.app.util.indicator;

import by.bsuir.app.entity.Analyzes;

import java.util.List;

public interface IndicatorHandler<T> {
    List<T> processIndicators(List<? extends Analyzes> analyzes);
}
