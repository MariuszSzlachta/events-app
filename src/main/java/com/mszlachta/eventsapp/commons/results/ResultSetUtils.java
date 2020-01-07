package com.mszlachta.eventsapp.commons.results;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;

public class ResultSetUtils {
    public static Date getTimestampOrNull(final ResultSet rs, final String columnLabel) throws SQLException {
        final Timestamp timestamp = rs.getTimestamp(columnLabel);
        return timestamp == null ? null : new Date(timestamp.getTime());
    }
}
