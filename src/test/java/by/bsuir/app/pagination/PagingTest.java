package by.bsuir.app.pagination;

import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.*;

public class PagingTest {

    private static final int TOTAL_PAGES = 100;
    private static final int CURRENT_PAGE_NUMBER = 3;
    private static final int PAGE_SIZE = 10;

    @Test
    public void testAddPageItemsShouldReturnExpectedValidPagingEntity() {
        Paging pagingEntity = Paging.of(TOTAL_PAGES, CURRENT_PAGE_NUMBER, PAGE_SIZE);

        Assert.assertTrue(pagingEntity.isNextEnabled());
        Assert.assertTrue(pagingEntity.isPrevEnabled());
        Assert.assertEquals(CURRENT_PAGE_NUMBER, pagingEntity.getPageNumber());
        Assert.assertEquals(PAGE_SIZE, pagingEntity.getPageSize());
    }
}