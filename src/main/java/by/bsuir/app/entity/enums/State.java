package by.bsuir.app.entity.enums;

public enum State {
    HIGH("Повышенный", "High"),
    LOW("Пониженный", "Low"),
    NORMAL("Нормальный", "Normal");

    private final String stateRu;
    private final String stateEn;

    State(String stateRu, String stateEn) {
        this.stateRu = stateRu;
        this.stateEn = stateEn;
    }

    public String getStateRu() {
        return stateRu;
    }

    public String getStateEn() {
        return stateEn;
    }
}
