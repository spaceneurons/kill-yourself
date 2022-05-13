package by.bsuir.app.service.impl;
import com.cw.cwSpring.models.Tender;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

public class UserDaoImplTest {
    UserDaoImpl userDaoImpl;
    Optional<User> optional;
    @Test
    void sortAsc() {
        assertEquals(5, findByUsername.SortAsc(username).get(0).getPrice());
    }

    @Test
    void swap() {
        assertEquals(200, findByEmail.Swap(email,0,1).get(0).getPrice());
    }

    @Test
    void sortDesc() {
        assertEquals(200, findByActivationCode.SortDesc(tenderArray).get(0).getPrice());
    }

    @Test
    void findMinCountGl() {
        assertEquals(5, 5);
    }
    @Test
    void calcRangedCount() {
        assertEquals(5, 5);
    }
    @Test
    void selectInPriceRange() {
        assertEquals(2, UserDaoImpl.SelectInPriceRange(optional,5,10).size());
    }
    @Test
    void selectInRangeSecond() {
        assertEquals(2, UserDaoImpl.SelectInPriceRange(optional,10,0).size());
    }
    @Test
    void selectInRangeAnother() {
        assertEquals(2, UserDaoImpl.SelectInPriceRange(optional,0,10).size());
    }
}
