import { Box, createStyles, Stack, Text, useMantineTheme } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import events from '../../data/schedule.json';

const useStyles = createStyles((theme) => ({
  box: {
    height: '60vh',
    minWidth: '50vw',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      height: '60vh',
    },
  },
  cellItem: {
    color: 'green',
    backgroundColor: 'transparent',
  },
  rowsExpanded: {
    color: theme.colors.white[0],
    backgroundColor: theme.colors.cqorange[4],
  },
  rowsHeader: {
    fontWeight: 700,
  },
}));

export function Schedule() {
  const { classes } = useStyles();
  const {
    breakpoints: { xs: xsBreakpoint },
  } = useMantineTheme();
  const aboveXsMediaQuery = `(min-width: ${xsBreakpoint}px)`;

  return (
    <Box className={classes.box}>
      <DataTable
        columns={[
          {
            accessor: 'day',
            visibleMediaQuery: aboveXsMediaQuery,
            cellsClassName: classes.cellItem,
            titleSx: (theme) => ({
              '&&': {
                color: theme.colors.cqorange[4],
                backgroundColor: theme.colors.cqgreen[7],
              },
            }),
          },
          {
            accessor: 'event',
            cellsClassName: classes.cellItem,
            titleSx: (theme) => ({
              '&&': {
                color: theme.colors.cqorange[4],
                backgroundColor: theme.colors.cqgreen[7],
              },
            }),
          },
          {
            accessor: 'time',
            textAlignment: 'right',
            cellsClassName: classes.cellItem,
            titleSx: (theme) => ({
              '&&': {
                color: theme.colors.cqorange[4],
                backgroundColor: theme.colors.cqgreen[7],
              },
            }),
          },
        ]}
        fontSize="sm"
        shadow="sm"
        horizontalSpacing="md"
        highlightOnHover
        textSelectionDisabled
        rowExpansion={{
          collapseProps: {
            transitionDuration: 500,
            animateOpacity: false,
            transitionTimingFunction: 'ease-out',
          },
          content: ({ record }) => (
            <Stack p="xs" spacing={6} className={classes.rowsExpanded}>
              {record.location ? (
                <Text>
                  <Text className={classes.rowsHeader}>Location:</Text> {record.location}
                </Text>
              ) : null}
              {record.additionalInformation ? (
                <Text>
                  <Text className={classes.rowsHeader}>Information:</Text>{' '}
                  {record.additionalInformation}
                </Text>
              ) : null}
            </Stack>
          ),
        }}
        idAccessor="event"
        records={events}
      />
    </Box>
  );
}
